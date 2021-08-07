<template>
    <div>
        <hr>
        <h2>Notizen</h2>
        <p>One small thing was added in this directory: the use of <code>$refs</code> to read inputs. this
        is a key feature of Vue. You can bind any HTML input or select element with the HTML attribute <samp>ref="whatever"</samp>
        and then call the element in your methods or computed properties.

        The <samp>$refs.whatever</samp> now stores the entire DOM object containing the attribute named "whatever". One of those property is <samp>value</samp>
         which allows you to read what was selected or entered.
        </p>

        <p>Keep also in mind that the refs element do contain a LOT of information. You can change pretty much everything targeting the ref.</p>
    </div>
</template>



<script>
export default {
    name: 'notes'
}
</script>