<template>
    <div>
        <Spinner v-if="gettingJob"/>
        <div v-if="!gettingJob" class="container">
            <div class="detail pre">
                <h3>{{ job.title }}</h3>
                <img class="my-image" :src="job.company.logoDataUrl ? job.company.logoDataUrl : require('../../assets/no-logo.png')">
            </div>
                <div class="detail full" v-html="job.description"></div>
        </div>
    </div>
</template>

<script>
import Spinner from '../../shared/templates/Spinner'
import { jobService } from '../../core/services/job/jobService'

export default {
    components: {
        Spinner
    },
    props: ['id'],
    name: 'JobDetail',
    data: () => ({
        job: {
            title: '',
            description: '',
            cooperationTypeIndex: 0,
            categoryTypeIndex: 0,
            requiredGenderTypeIndex: 0,
            company: {
                name: '',
                logoDataUrl: '',
                categoryTypeIndex: 0,
                bio: '',
                address: ''
            }
        },
        gettingJob: false
    }),
    mounted: function() {
        this.gettingJob = true
        jobService.getJobById(this.id).then(res =>  {this.job = res.data; this.gettingJob = false}, () => this.gettingJob = false)
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 100px;
}

.detail {
    margin: auto;
    width: 70%;
    max-width: 800px;
    background-color: white;
    border-radius: 20px;
    -webkit-box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);
box-shadow: 2px 3px 12px -6px rgba(0, 0, 0, 0.75);

}

.detail.pre {
    padding: 50px;
    display: flex;
    justify-content: space-around;
}

.detail.full {
    margin-top: 20px;
    margin-bottom: 80px;
    padding: 50px;
    text-align: right;
}

.my-image {
    width: 100px;
    max-height: 100px;
}

</style>