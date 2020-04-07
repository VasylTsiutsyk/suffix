<template>
  <main>
    <BlogBaner/>
    <div class="container">

    </div>
    
  </main>
</template>

<script>
import BlogBaner from "@/components/blog-baner/blog-baner"
export default {
  name: "blog",
    metaInfo() {
    return {
      title: this.$title('Blog')
      }
  },
  components: {
    BlogBaner
  }
}
</script>
