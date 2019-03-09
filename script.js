var app = new Vue({
  el: '#app',
  data: {
    total: '',
    setTotal: 0.00,
    expenses: [],
    cost: '',
    description: '',
    drag: {},
  },
  methods: {
    changeTotal() {
      this.setTotal = this.total
      this.total = ''
    },
    addExpense() {
      this.expenses.push({cost: this.cost, description: this.description});
      this.description = '';
      this.cost = '';
    },
    deleteExpense(expense) {
      var index = this.expenses.indexOf(expense);
      if (index > -1)
        this.expenses.splice(index,1);
    },
    dragExpense(expense) {
      this.drag = expense;
    },
    dropExpense(expense) {
      const indexExpense = this.expenses.indexOf(this.drag);
      const indexTarget = this.expenses.indexOf(expense);
      this.expenses.splice(indexExpense,1);
      this.expenses.splice(indexTarget,0,this.drag);
    },
  },
  computed: {
    computedTotal() {
      let total = 0
      if (this.expenses.length == 0) {
        return this.setTotal
      } else {
        total = this.expenses.reduce((total,num) => total-num.cost, this.setTotal)
        return total.toFixed(2)
      }

    },
  },
});
