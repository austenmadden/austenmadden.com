---
layout: post
title:  "Getting Started with Azure ML"
date:   2018-01-13 12:22:57 -0400
categories: azure machine-learning ruby
---

Recently I attended [Codemash](http://www.codemash.org/) for my second time. It's a great conference that offers talks on a range of subjects. This year I gravitated towards Machine Learning sessions, embracing a hype train superseded only by this year's Blockchain fad. Codemash has it's roots in the .NET community and unsurprisingly many of the Machine Learning talks showcased some of Microsoft Azure's related capabilities.

While I'm primarily interested in understanding the practice of Data Science, some of the tools I saw showed promise for delivering value quickly/reducing the effort required by some of the more menial tasks related to large data sets.

## Azure ML Studio

The first thing you'll notice once you've setup an account with [Azure ML Studio](https://studio.azureml.net) is that it has a somewhat daunting GUI interface with many options depending on what you are trying to accomplish (much like it's other Azure counterparts). Fortunately Microsoft saw fit to equip it with a robust tutorial and many example projects.

Its most useful feature provides a GUI tool to construct a flow chart of models and data transformations (called an experiment) to solve various problems and build a practical machine learning solution. You are also able to drop down into Python or R to solve various tasks if you so choose. Additionally, it has support for notebooks if that is your preference. What I wanted to focus on in this post was the ability to setup a web service based on a model built in ML Studio.

![Web Service Example]({{ "/img/azure-ml.png" }}){:style="width: 740px;"}

Through the interface you can setup a web service that exposes your model via a http endpoint accepting a JSON payload. Below is an example of an API call to the above model using ruby and the HTTParty gem!

## Ruby API Call Example
```ruby
require 'httparty'

url =  'url_of_service' # url of your azure web service
api_key = 'dummy_key' # real api_key would go here


## JSON input, these can be tuned in the model
body = JSON.generate(
  {
    "Inputs": {
      "input1": [{
        'age': "25",
        'workclass': "Private",
        'fnlwgt': "1",
        'education': "Bachelors",
        'education-num': "1",
        'marital-status': "Single",
        'occupation': "Exec-managerial",
        'relationship': "",
        'race': "White",
        'sex': "Female",
        'capital-gain': "0",
        'capital-loss': "0",
        'hours-per-week': "40",
        'native-country': "United-States",
      }],
    },
    "GlobalParameters":  {}
  }
)

HTTParty.post(
  url,
  headers: {
    'Content-Type' => 'application/json',
    'Authorization' => "Bearer #{api_key}"
  },
  body: body
)
```

That's all you need to make a valid API call. Additionally there is an API for batch calls. Still learning the ropes of the platform but so far it seems to ease the delivery of useful Data Science. There are quite a few things I'd desire before using this concept in a production environment, but for quick experimentation it's hard to beat!
