<template>
    <div class="my-auto">
        <label>
            <input type="checkbox" :value="trueValue" v-model="isChecked" @change="onChange" />
            {{ isChecked }}
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
    trueValue: {
        type: [String, Number, Boolean],
        default: true,
    },
    falseValue: {
        type: [String, Number, Boolean],
        default: false,
    },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (event) => {
    emit('update:modelValue', event.target.checked ? props.trueValue : props.falseValue)
}

const isChecked = ref(false)
</script>