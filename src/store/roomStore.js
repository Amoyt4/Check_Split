import { defineStore } from "pinia";

export const useRoomStore = defineStore("roomStore", {
  state: () => ({
    currendId: 0,
    people: [],
    food: [],
    calculatedTotal: {},
  }),
  getters: {
    extractNames() {
      let tyty = this.food.arr;
      let names = tyty.map((people) => people.name);
      return names.join(", ");
    },
  },
  actions: {
    addPeople(name) {
      this.people.push({
        id: this.currendId,
        name,
      });
      this.currendId += 1;
    },

    addFood(name, price, arr) {
      this.food.push({
        id: this.food.length + 1,
        name,
        price,
        arr,
      });
    },

    deleteFood(deleteFoodId) {
      const index = this.food.findIndex((item) => item.id === deleteFoodId);
      if (index !== -1) {
        this.food.splice(index, 1);
      }
    },

    deletePeople(deletePeopleId) {
      const index = this.people.findIndex((item) => item.id === deletePeopleId);
      if (index !== -1) {
        this.people.splice(index, 1);
      }
    },

    updateCalculatedTotal() {
      this.calculatedTotal = {};
      for (let product of this.food) {
        let checkPerEater = Math.ceil(product.price / product.arr.length);
        for (let eater of product.arr) {
          if (!this.calculatedTotal[eater.id]) {
            this.calculatedTotal[eater.id] = {
              id: eater.id,
              name: eater.name,
              check: 0,
            };
          }
          this.calculatedTotal[eater.id].check += checkPerEater;
        }
      }
    },
  },
});
