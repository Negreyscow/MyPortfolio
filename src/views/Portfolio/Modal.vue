<template>
    <v-dialog>
        <template v-slot:activator="{ on }">
            <v-card v-on="on">
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
            </v-card>
        </template>

        <v-card>
            <v-carousel height="650">
            <v-carousel-item
                src="@/assets/ui-example.png"
            />
            <v-carousel-item
                src="@/assets/ui-example.png"
            />
            <v-carousel-item
                src="@/assets/ui-example.png"
            />
            </v-carousel>
            <!-- <v-img height="600" src="@/assets/ui-example.png"></v-img> -->
            <div class="d-flex justify-space-between align-center">
            <v-card-actions>
            <v-btn>VIEW</v-btn>
            <v-btn>GITHUB</v-btn>
            </v-card-actions>
            <div class="d-flex align-center mx-5">
            <div class="mx-3">Made with</div>
            <v-chip>Vue</v-chip>
            </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>