<template>
    <PageHeader /><!-- 헤더 컴포넌트 -->
    <PageHome /><!-- 홈 컴포넌트 -->
    <PageAboutme /><!-- 어바웃미 컴포넌트 -->
    <PageSkills /><!-- 스킬 컴포넌트 -->
    <PageProject /><!-- 프로젝트 컴포넌트 -->
    <PageCareer /><!-- 커리어 컴포넌트 -->
    <PageFooter /><!-- 푸터 컴포넌트 -->
</template>

<script>
import PageHeader from '@/views/common/PageHeader.vue'
import PageHome from '@/views/common/PageHome.vue'
import PageSkills from '@/views/common/PageSkills.vue'
import PageAboutme from '@/views/common/PageAboutme.vue'
import PageProject from '@/views/common/PageProject.vue'
import PageCareer from '@/views/common/PageCareer.vue'
import PageFooter from '@/views/common/PageFooter.vue'

export default ({
    name: 'PageMain'
    ,components:{
        PageHeader
        ,PageHome
        ,PageSkills
        ,PageAboutme
        ,PageProject
        ,PageCareer
        ,PageFooter
    }
})
</script>
