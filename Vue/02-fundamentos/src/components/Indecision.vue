<template>
	<div>
		<!-- <div class="bg-dark"></div> -->
		<div class="indecision-container">
			<p>HACEME UNA PREGUNTA</p>
			<input v-model="question" type="text" placeholder="tu pregunta" />
			<p>Recordá terminar con un signo de interrogración (?)</p>
			<div v-if="isValidQuestion">
				<!-- <h2>{{ question }}</h2> -->
				<h1>{{ answer === "no" ? "- NO -" : answer === "yes" ? "- SI -" : '...' }}</h1>
				<img v-if="img" :src="img" alt="b" />
			</div>
			<h4 v-else>tu respuesta es...</h4>
			<button  v-if="isValidQuestion" @click="newGame">NUEVO</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			question: null,
			answer: null,	
			img: null,
			isValidQuestion: false,
		};
	},
	methods: {
		async getAnswer() {
			this.answer = "Pensando...";
			const { answer, image } = await fetch("https://yesno.wtf/api").then(
				(res) => res.json()
			);
			this.answer = answer;
			this.img = image;
		},
		newGame() {
			this.question = null
			this.answer = null
			this.img = null
			this.isValidQuestion = false
		}
	},
	watch: {
		question(value, oldValue) {
			this.isValidQuestion = false;
			if (value === null || !value.includes("?")) return;
			this.isValidQuestion = true;
			this.getAnswer();
		},
	},
};
</script>

<style scoped>
img,
.bg-dark {
	height: 50vh;
	left: 0px;
	max-height: 100%;
	max-width: 100%;
	top: 0px;
}

.bg-dark {
	background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
	z-index: 99;
}

input {
	width: 250px;
	height: 30px;
	padding: 10px 15px;
	border-radius: 5px;
	border: none;
}
input:focus {
	outline: none;
	background-color: gray;
	color: white;
	font: bold;
	font-size: 18px;
}

p {
	color: white;
	font-size: 18px;
	margin-top: 20px;
}

h1, h2, h4 {
	color: white;
}

h2 {
	margin-top: 50px;
}

button {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 150px;
	padding: 10px 10px;
	color: rgb(64, 64, 64);
}
</style>