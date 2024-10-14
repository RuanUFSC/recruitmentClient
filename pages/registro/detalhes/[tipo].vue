<template>
    <div  v-if="isValidType && tipo === 'candidato'" class="d-flex flex-column align-items-center justify-content-center">
        <FormCandidato />
    </div>
    <div  v-if="isValidType && tipo === 'recrutador'" class="d-flex flex-column align-items-center justify-content-center">
        <FormRecrutador/>
    </div>
</template>

<script setup>
import checkUserType from '~/middleware/check-user-type';
const tipo = useRoute().params.tipo;
const isValidType = ref(tipo === 'recrutador' || tipo === 'candidato');

definePageMeta({
    middleware: checkUserType
});
</script>