---
layout: main
---
{% include talks/header.html %}
<div class="container" id="talk-list">
    <h1 class="center" >Talks</h1>
    
    <p class="center" >Confira todos os talks que rolaram lá na conferência!</p>


    {% for video in site.data.videos.videos %}

            {% include matchId.html 
            dataset = site.data.talks.talks
            idToFind = video.talk
            %}

            {% include talk-block.html talk=matchedObject %}

    {% endfor %}


</div>

{% include footer.html %}