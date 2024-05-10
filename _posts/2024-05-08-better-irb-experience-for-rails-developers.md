---
layout: post
title:  "Better IRB experience for Rails developers"
date:   2024-05-08 09:22:57 -0400
categories: irb ruby rails ruby-on-rails
---

I've been using irb sessions on the terminal for a long time to explore the Ruby language. Sometimes
for larger Rails apps I'll also use it to test Ruby-isms that fall into more edge case territory
rather than the Rails console due to general bootup time.

However, a common gotcha that impacts all Rails developers is the differences between the standard
Ruby library and Rails provided behaviors such as ActiveSupport. This can derail (pun intended) this
use case. However, there's an easy work around to that! Simply require ActiveSupport.


```ruby
require 'active_support/all'

# Can also selectively load only the parts of ActiveSupport you need.
# For example string extensions:
require 'active_support/core_ext/string'
```

If you'd like to make this behavior optional you could always define it in a method and call it
when you need it.


#### On Demand ActiveSupport Example

```ruby
def load_active_support
  require 'active_support/all'
end

load_active_support
```

#### On Demand ActiveModel Example

This could extend to other Rails provided  as well.

```ruby
def load_active_model
  require 'active_model'

  # Most parts of rails provide `eager_load!` method to load eager loaded classes.
  # May or may not be  necessary depending on your use case.
  ActiveModel.eager_load!
end

load_active_model
```

#### The ".irbrc" file

To make these methods always available create a `.irbrc` file in your home directory (for example
run `touch ~/.irbrc`) and include the examples above. Your irb session will now have these methods
available automatically!
