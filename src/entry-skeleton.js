import Vue from 'vue'
import Skeleton from './components/Skeleton'
import SkeletonDetail from './components/SkeletonDetail.vue'

export default new Vue({
  components: {
    Skeleton,
    SkeletonDetail
  },
  // 多骨架屏从实现上看，实际上是把多个骨架屏都加载到页面上
  // 然后通过webpackconfig中的routes配置的skeletonId确定显示某一个skeleton
  template: `
    <div>
      <skeleton id="skeleton" style="display:none"/>
      <skeletonDetail id="skeleton_detail" style="display:none"/>
    </div>
  `
})
