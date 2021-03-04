<template>
  <div class="container" style="max-width:800px">
    <h1 class="display-2 mt-3">All Poets</h1>
    <hr>
    <Card class="mb-3">
      <template #header>

        <img alt="user header" src="/image1.jpg">
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #subtitle>
        <img style="width:40px;margin-right:10px;border-radius:20px" src="/yahya.jpg"> Yahya Hosainy
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
      </template>
    </Card>
    <Card class="mb-3">
      <template #header>
        <img alt="user header" src="/image2.jpg">
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #subtitle>
        <img style="width:40px;margin-right:10px;border-radius:20px" src="/yahya.jpg"> Yahya Hosainy
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
  components: {
    Button,
    Card
  }
}
</script>