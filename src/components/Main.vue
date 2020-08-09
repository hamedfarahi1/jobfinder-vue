<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
   <div>
	   <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Initial Value (Read Only)</label>
      <md-input v-model="initial" readonly></md-input>
    </md-field>
   </div>
</template>


<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->


<script>
export default {
  name: "Main",
  props: {
	msg: String
  },
  data: () => ({
      initial: 'Initial Value'
	})
};
</script>


<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
</style>
