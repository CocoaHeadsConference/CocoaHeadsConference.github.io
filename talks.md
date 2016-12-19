---
layout: main
---
{% include talks/header.html %}
<div class="container">
    <h1>Talks</h1>
    
    {% for video in site.data.videos.videos %}

            {% include matchId.html 
            dataset = site.data.talks.talks
            idToFind = video.talk
            %}

            {% include talk-block.html talk=matchedObject %}

    {% endfor %}

</div>

{% include footer.html %}