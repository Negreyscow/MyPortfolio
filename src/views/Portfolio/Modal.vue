<template>
    <v-dialog>
        <template v-slot:activator="{ on }">
            <v-card v-on="on">
                <v-img width="400" height="200" :src="project.thumbnail"></v-img>
            </v-card>
        </template>

        <v-card color="primary">
            <v-img
                reverse-transition="fade-transition"
                transition="fade-transition"
                :src="project.thumbnail"
            />
            <!-- <v-img height="600" src="@/assets/ui-example.png"></v-img> -->
            <div class="d-flex justify-space-between align-center">
                <v-card-actions>
                <v-btn :disabled="!project.view" target="_blank" :href="project.view"  color="third" class="white--text">VIEW</v-btn>
                <v-btn :disabled="!project.github" color="third" target="_blank" :href="project.github" class="white--text">GITHUB</v-btn>
                </v-card-actions>
                <div class="subtitle">{{ project.title }}</div>
                <div class="d-flex align-center mx-5">
                    <div class="mx-3 subtitle-2">Build with</div>
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