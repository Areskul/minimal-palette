export const color = {
  props: {
    color: String,
    text: String,
  },
  mounted() {
    this.setColor();
    this.setText();
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
