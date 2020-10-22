<template>
    <div class="blog-post">
        <div class="pc">
                <h1>{{title}}</h1>
        </div>
        <div class="sp">
            <h1>{{title}}</h1>
        </div>
        <p class="date">{{date}}</p>
        <p>
            『ハワイの歴史と文化』という本を読んだ．
            2ヶ月ほど前，上野のブックオフで買ったものだ．
            370円だった．
            先日タイの歴史の新書を読んで，引き続き歴史を学びたい気分だったところ，
            ちょうど目に入ったので読むことにした．
            ハワイである意味とかは特にない．
        </p>
  </div>
</template>

<script>
export default {
    layout: "blog",
    data: function () {
        return {
            title: "【書評】女性のいない民主主義",
            date: "2020/10/21"
        }
    }
}
</script>

<style>

</style>
