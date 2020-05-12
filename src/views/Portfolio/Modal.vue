<template>
    <v-dialog>
        <template v-slot:activator="{ on }">
            <v-card v-on="on">
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
            </v-card>
        </template>

        <v-card color="primary">
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
                <v-btn color="third" class="white--text">VIEW</v-btn>
                <v-btn color="third" class="white--text">GITHUB</v-btn>
                </v-card-actions>
                <div class="subtitle">Titulo</div>
                <div class="d-flex align-center mx-5">
                    <div class="mx-3 subtitle-2">Made with</div>
                    <v-chip class="subtitle-2">Vue</v-chip>
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