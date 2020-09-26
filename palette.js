export const color = {
  props: {
    color: String,
  },
  mounted() {
    this.setColor();
  },
  methods: {
    setColor: function() {
      if (this.color) {
        const color = `var(--${this.color})`;
        this.$el.style.background = color;
      } else {
        return;
      }
    },
  },
};
export const text = {
  props: {
    text: String,
  },
  mounted() {
    this.setText();
  },
  methods: {
    setText: function() {
      if (this.text) {
        const color = `var(--${this.text})`;
        this.$el.style.color = color;
      } else {
        const text = "ternary-lighten2";
        const color = `var(--${text})`;
        this.$el.style.color = color;
      }
    },
  },
};
