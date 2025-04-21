<script setup lang="ts">
import { ref } from 'vue';

// define the event handlers
// used as output
// example
const emit = defineEmits([
    'onTakePicture',
    'onEncodeQRCode',
]);

// define input ref variables
// example
const props = defineProps([
    'visible',
    'variable1',
])

// code starts here ////////////////////////////////////////////////////////////////////////////////


// code ends here ////////////////////////////////////////////////////////////////////////////////


// define some exposed functions
const flip = ( someInputParameters ) => {
    // can call emit from here
};

// define some exposed functions
const discard = ( someInputParameters ) => {
    // can call emit from here
};

// define functions that can be called from outside
// used as input
defineExpose({
    flip,
    discard,
});

</script>

<template>
    <div class="relative" v-show="false">
        Hello this is me!
    </div>
</template>