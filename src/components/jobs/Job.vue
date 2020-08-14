<template>
    <div class="container">
        <Spinner v-if="gettingJobs"/>
        <div v-if="!gettingJobs" class="tile-container">
            <div class="tile" v-for="item in jobs" :key="item.id" @click="() => goToJob(item.id)">
                <h4>
                    <span>{{ item.title }}  </span>  | 
                    <span>{{ item.company.name }}  </span>
                </h4>
                <img class="my-image" :src="item.company.logoDataUrl ? item.company.logoDataUrl : require('../../assets/no-logo.png')">
            </div>
        </div>
    </div>
</template>

<script>

import {jobService} from '../../core/services/job/jobService'
import Spinner from '../../shared/templates/Spinner'

export default {
  components:{
    Spinner
  },
    name: 'Job',
    data: () => ({
        jobs: [],
        gettingJobs: false
    }),
    methods: {
      goToJob: function(id) {
        this.$router.push(`/job/${id}`)
      }
    },
    mounted: function() {
        this.gettingJobs = true
        jobService.getJobs(0,10,[]).then(res =>  {this.jobs = res.data; this.gettingJobs = false}, () => this.gettingJobs = false)
    }
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tile-container{
  width: 100%;
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
  cursor: pointer;
}

@media screen and(max-width:500px){
  .tile{
     flex-basis:100% !important;
     max-width:100%;
  }
}

.my-image {
    max-width: 150px;
    max-height: 150px;
}
</style>