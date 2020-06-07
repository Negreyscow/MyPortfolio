<template>
    <v-card class="pr-5" flat>
        <v-card-title class="ml-8 mb-4 headline text-center">
            {{ title }}
        </v-card-title>
        <div>
            <v-timeline dense>
                <v-timeline-item
                    v-for="item in items"
                    :key="item.id"
                    color="third"  
                    small
                >
                    <div class="d-flex align-left">
                        <span class="subtitle-2 font-weight-medium"> {{ item.start }} -<br>{{ item.end }}</span>
                        <div class="ml-4">
                            <div class="subtitle font-weight-light">{{ item.title }}</div>
                            <div class="subtitle-2 font-weight-bold">{{ item.location }}</div>
                        </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },

        items: {
            type: Array,
            default: () => ([])
        }
    }
}
</script>

<style>

</style>