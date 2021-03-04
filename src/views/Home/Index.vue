<template>
  <div>
    <div class="container mt-4">
      <h1>{{ user.name }}</h1>
      <hr>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <Card style="margin-bottom: 2em">
            <template #content>
              <h4>New Lyric</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.</p>
              <Button icon="pi pi-pencil" label="Create" />
            </template>
          </Card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <Card style="margin-bottom: 2em">
            <template #content>
              <h4>Search in Lyrics</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.</p>
              <Button icon="pi pi-search" label="Search" />
            </template>
          </Card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <Card style="margin-bottom: 2em">
            <template #content>
              <h4>Fallow others</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.</p>
              <Button icon="pi pi-user-plus" label="See" />
            </template>
          </Card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <Card style="margin-bottom: 2em">
            <template #content>
              <h4>Like and comment</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.</p>
              <Button icon="pi pi-file" label="Posts" />
            </template>
          </Card>
        </div>
      </div>
      <hr>
    </div>
    <div class="container" style="max-width:800px">
      <h1 class="display-2">Your Lyrics</h1>
      <Card class="mb-3">
        <template #header>
          <img alt="user header" src="/image1.jpg">
        </template>
        <template #title>
          Advanced Card
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
  </div>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';

export default {
  data() {
    return {
      user: window.reactStore.user,
    }
  },
  components:{
    Card,
    Button
  }
}
</script>