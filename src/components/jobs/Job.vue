<template>
    <div>
        <div class="tile-container">
            <div class="tile" v-for="item in jobs" :key="item.id">
                <h4>
                    <span>{{ item.title }}  </span>  | 
                    <span>{{ item.company.name }}  </span>
                </h4>
                <img class="my-image" :src="item.company.logoDataUrl ? item.company.logoDataUrl : '../../assest/png.png'">
            </div>
        </div>
    </div>
</template>

<script>

import {jobService} from '../../core/services/job/jobService'

export default {
    name: 'Job',
    data: () => ({
        jobs: []
    }),
    mounted: function() {
        jobService.getJobs(0,10,[]).then(res =>  this.jobs = res.data)
    }
}
</script>

<style scoped>
body{
  background: #eee;
}

.tile-container{
  display:flex;
  flex-wrap:wrap;
  align-items: stretch;
  flex-direction: row;
}
.tile{
  flex:0 438px;
align-self:stretch;
  max-width:100%;
  min-height: 10rem;
  margin:5px auto;
  box-shadow: 0px 4px 23px -17px rgba(0,0,0,0.75);
}

@media screen and(max-width:500px){
  .tile{
     flex-basis:100% !important;
     max-width:100%;
  }
}

.my-image {
    max-width: 130px;
}
</style>