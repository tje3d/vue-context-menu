export default {
  name: 'context-menu',
  props: {
    id: {
      type: String,
      default: 'default-ctx',
    },
  },
  data() {
    return {
      locals: {},
      align: 'left',
      ctxTop: 0,
      ctxLeft: 0,
      ctxVisible: false,
    };
  },
  methods: {
    setPositionFromEvent(e) {
      e = e || window.event;

      requestAnimationFrame(() => {
        var win = {
          w: window.innerWidth,
          h: window.innerHeight,
        };
        var scroll = {
          l: window.scrollX,
          t: window.scrollY,
        };
        var menu = {
          w: this.$refs.ul.scrollWidth,
          h: this.$refs.ul.scrollHeight,
        };
        var position = {
          x: e.clientX + scroll.l,
          y: e.clientY + scroll.t,
        };
        if (e.clientX + menu.w > win.w) {
          position.x -= menu.w;
        }
        if (e.clientY + menu.h > win.h) {
          position.y -= menu.h;
        }

        this.ctxLeft = position.x;
        this.ctxTop = position.y;
      });
    },

    open(e, data) {
      if (this.ctxVisible) {
        this.ctxVisible = false;
      }

      this.ctxVisible = true;
      this.$emit('ctx-open', (this.locals = data || {}));
      this.setPositionFromEvent(e);
      this.$el.setAttribute('tab-index', -1);
      this.bindEvents();
      return this;
    },

    bindEvents() {
      window.addEventListener('click', this._onclick, true);
      window.addEventListener('keyup', this._onescape, true);
      window.addEventListener('contextmenu', this._closeIfVisible, true);
      window.addEventListener('resize', this._closeIfVisible, true);
      window.addEventListener('scroll', this._closeIfVisible, true);
    },

    unbindEvents() {
      window.removeEventListener('click', this._onclick, true);
      window.removeEventListener('keyup', this._onescape, true);
      window.removeEventListener('contextmenu', this._closeIfVisible, true);
      window.removeEventListener('resize', this._closeIfVisible, true);
      window.removeEventListener('scroll', this._closeIfVisible, true);
    },

    _onclick(e) {
      e.preventDefault();

      let isOpen = !!this.ctxVisible;
      let outsideClick = isOpen && !this.$el.contains(e.target);

      if (outsideClick) {
        if (e.which !== 1) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else {
          this.ctxVisible = false;
          this.$emit('ctx-cancel', this.locals);
          e.stopPropagation();
        }
      } else {
        this.ctxVisible = false;
        this.$emit('ctx-close', this.locals);
      }
    },

    _onescape(e) {
      if (e.keyCode !== 27) {
        return;
      }

      if (!this.ctxVisible) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();
      this.ctxVisible = false;
    },

    _closeIfVisible(e) {
      if (!this.ctxVisible) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();
      this.ctxVisible = false;
    },
  },
  watch: {
    ctxVisible(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.unbindEvents();
      }
    },
  },
  computed: {
    ctxStyle() {
      return {
        display: this.ctxVisible ? 'block' : 'none',
        top: (this.ctxTop || 0) + 'px',
        left: (this.ctxLeft || 0) + 'px',
      };
    },
  },
};
