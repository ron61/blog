<template>
  <div class="container">
    <!-- <v-for item in items>
      <Card
      :title=item.title
      :description=item.description
      :date=item.date
      :link=item.link
      :imgSrc=item.imgSrc
      :imgAlt=item.imgAlt
      /> -->
      <!-- or
      <Card
      :articleObj=item
      /> -->
    <Card
      title="【書評】女性のいない民主主義"
      description="『女性のいない民主主義』という本を読みました．Kindleで470円で書いました．けっこうおもしろかったです．"
      date="2020/10/21"
      link="/posts/democracy-without-women"
      imgSrc="/img/lotus.jpg"
      imgAlt="alternative message"
    />
    <Card
      title="【書評】ハワイの歴史と文化"
      description="『ハワイの歴史と文化』という本を読んだ．2ヶ月ほど前，上野のブックオフで買ったものだ．370円だった．"
      date="2020/10/20"
      link="/posts/hawaiian-culture-and-history"
      imgSrc="/img/sunset.jpg"
      imgAlt="alternative message"
    />
    <Card
      title="【書評】チョコレートの世界史"
      description="『チョコレートの世界史』という本を読みました．ブックオフで470円で書いました．けっこうおもしろかったです．"
      date="2020/10/19"
      link="/posts/world-history-of-chocolate"
      imgSrc="/img/kitkat.jpg"
      imgAlt="alternative message"
    />
  </div>
</template>

<script>
export default {
  layout: "blog"
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>>
