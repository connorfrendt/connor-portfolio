<template>
    <div class="text-white">
        Hello World
        <button @click="generateAndDownloadPDF">Download Resume (PDF)</button>
    </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
    methods: {
        generateAndDownloadPDF() {
            const doc = new jsPDF();

            doc.text('Your resume content goes here', 10, 10);

            doc.save('resume.pdf');
        }
    }
}
</script>

<style scoped>

</style>