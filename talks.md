---
layout: main
---
{% include header.html %}
<div class="container" id="talk-list">
    <h1 class="center" >Talks</h1>
    
    <p class="center" >Confira todos os talks que rolaram lá na conferência!</p>

    <div class="row">

    {% for video in site.data.videos.videos %}

            {% include matchId.html 
            dataset = site.data.talks.talks
            idToFind = video.talk
            %}

            {% include talk-block.html talk=matchedObject %}

    {% endfor %}

    </div>
</div>