---
layout: post
title:  "Ruby Set#include? vs bitwise & benchmark"
date:   2020-09-07 12:22:57 -0400
categories: azure machine-learning ruby
---

I was reviewing some code recently which included `Set#include?`. I was curious about the
performance implications of `Set#include?` vs `Enumerable#include?` which can be *MUCH* slower than
say a bitwise `&` and wanted to test it out.

## Benchmark

<script src="https://gist.github.com/austenmadden/24c77205c119638a776741334c953c55.js"></script>

As you can see `Set#include?` is quite fast. The reason is `Set` maintains a hash object
representing the `Set`. [It checks against it for inclusion, making the operation
constant.](https://github.com/ruby/ruby/blob/b7d86e330c76b4f9615511307e1c40f4f2937c83/lib/set.rb#L243-L245)

```ruby
irb(main):014:0> Set.new([1,2,3,4]).instance_variable_get('@hash')
=> {1=>true, 2=>true, 3=>true, 4=>true}
```
