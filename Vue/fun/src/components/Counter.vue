<template>
	<div>
		<h2>{{ customTitle }}</h2>
		<p>{{ counter }} <sup>2</sup>= {{ squareCounter }}</p>

		<div>
			<button @click="decreace">-1</button>
			<button @click="increace">+1</button>
		</div>
	</div>
</template>

<script>

export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            validator(value) {
                return value >= 0
            }          
        }
    },
	data() {
		return {
			counter: this.start,
		};
	},
	methods: {
		getSquareValue() {
			this.counter * this.counter;
		},
		increace() {
			++this.counter;
		},
		decreace() {
			--this.counter;
		},
	},
	computed: {
		squareCounter() {
			return this.counter * this.counter;
		},
        customTitle(){
            return this.title || 'Counter'
        }
	},
};
</script>

<style>
button {
	background-color: #64bb87;
	border-radius: 5px;
	border: none;
	color: black;
	cursor: pointer;
	margin: 5px;
	padding: 5px 20px;
	transition: 0.3s ease-in-out;
}
button:hover {
	background-color: #19315a;
	color: white;
	transition: 0.3s ease-in-out;
}
</style>
