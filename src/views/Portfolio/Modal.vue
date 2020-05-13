<template>
    <v-dialog>
        <template v-slot:activator="{ on }">
            <v-card v-on="on">
            <v-img width="100%" height="100%" :src="project.thumbnail"></v-img>
            </v-card>
        </template>

        <v-card color="primary">
            <v-carousel height="650">
                <v-carousel-item
                    v-for="preview in project.previews"
                    :key="JSON.stringify(preview)"
                    :src="preview"
                />
            </v-carousel>
            <!-- <v-img height="600" src="@/assets/ui-example.png"></v-img> -->
            <div class="d-flex justify-space-between align-center">
                <v-card-actions>
                <v-btn color="third" class="white--text">VIEW</v-btn>
                <v-btn color="third" class="white--text">GITHUB</v-btn>
                </v-card-actions>
                <div class="subtitle">{{ project.title }}</div>
                <div class="d-flex align-center mx-5">
                    <div class="mx-3 subtitle-2">Made with</div>
                    <v-chip 
                        v-for="tech in project.techs"
                        :key="tech.name"
                        class="caption ml-1"
                        :color="tech.color"
                        text-color="white"
                    >
                        {{ tech.name }}
                    </v-chip>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>