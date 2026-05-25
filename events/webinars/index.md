---
layout: events
title: Webinars 2026
permalink: /events/webinars/
favicon: /img/logo.png
body_class: ev-webinars
---
{% assign today = site.time | date: "%Y-%m-%d" %}

{% assign genai_talks = site.data.webinars | where: "series", "GenAI" | sort: "date" %}
{% assign health_talks = site.data.webinars | where: "series", "Health" | sort: "date" %}

{% assign genai_next_talk = nil %}
{% for t in genai_talks %}
  {% assign t_day = t.date | date: "%Y-%m-%d" %}
  {% if t_day >= today and genai_next_talk == nil %}
    {% assign genai_next_talk = t %}
  {% endif %}
{% endfor %}

{% assign health_next_talk = nil %}
{% for t in health_talks %}
  {% assign t_day = t.date | date: "%Y-%m-%d" %}
  {% if t_day >= today and health_next_talk == nil %}
    {% assign health_next_talk = t %}
  {% endif %}
{% endfor %}

{% assign genai_next_ts = 9999999999 %}
{% if genai_next_talk %}
  {% assign genai_next_ts = genai_next_talk.date | date: "%s" | plus: 0 %}
{% endif %}

{% assign health_next_ts = 9999999999 %}
{% if health_next_talk %}
  {% assign health_next_ts = health_next_talk.date | date: "%s" | plus: 0 %}
{% endif %}

{% capture genai_col %}
  {% include webinar_agenda_card.html
       series="GenAI"
       anchor_id="genai-stats-series"
       series_label="Generative AI and Statistics"
       series_tagline="Bridging the gap between generative AI and statistical methodologies."
       next_talk=genai_next_talk
       all_talks=genai_talks %}
  {% for t in genai_talks %}
    {% assign t_day = t.date | date: "%Y-%m-%d" %}
    {% if t_day >= today %}
      {% include webinar_card.html t=t %}
    {% endif %}
  {% endfor %}
  {% for t in genai_talks reversed %}
    {% assign t_day = t.date | date: "%Y-%m-%d" %}
    {% if t_day < today %}
      {% include webinar_card.html t=t %}
    {% endif %}
  {% endfor %}
{% endcapture %}

{% capture health_col %}
  {% include webinar_agenda_card.html
       series="Health"
       anchor_id="health-data-science-series"
       series_label="Statistical and AI Methods for Health Data Science"
       series_tagline="Empowering health data science through the integration of statistics and AI."
       next_talk=health_next_talk
       all_talks=health_talks %}
  {% for t in health_talks %}
    {% assign t_day = t.date | date: "%Y-%m-%d" %}
    {% if t_day >= today %}
      {% include webinar_card.html t=t %}
    {% endif %}
  {% endfor %}
  {% for t in health_talks reversed %}
    {% assign t_day = t.date | date: "%Y-%m-%d" %}
    {% if t_day < today %}
      {% include webinar_card.html t=t %}
    {% endif %}
  {% endfor %}
{% endcapture %}

<div class="webinars-grid" id="events">
  {% if genai_next_ts <= health_next_ts %}
    <div class="webinars-col">{{ genai_col }}</div>
    <div class="webinars-col">{{ health_col }}</div>
  {% else %}
    <div class="webinars-col">{{ health_col }}</div>
    <div class="webinars-col">{{ genai_col }}</div>
  {% endif %}
</div>

{% include webinars_footer.html %}
