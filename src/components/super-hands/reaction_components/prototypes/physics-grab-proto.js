// base code used by grabbable for physics interactions
module.exports = {
  schema: {
    usePhysics: {default: 'ifavailable'}
  },
  physicsInit: function () {
    this.constraints = new Map()
  },
  physicsUpdate: function () {
    if (this.data.usePhysics === 'never' && this.constraints.size) {
      this.physicsClear()
    }
  },
  physicsRemove: function () {
    this.physicsClear()
  },
  physicsStart: function (evt) {
    // initiate physics constraint if available and not already existing
    if (this.data.usePhysics !== 'never' && this.el.body &&
        evt.detail.hand.body && !this.constraints.has(evt.detail.hand)) {
      const newConId = Math.random().toString(36).substr(2, 9)
      this.el.setAttribute('constraint__' + newConId, {
        target: evt.detail.hand
      })

      this.constraints.set(evt.detail.hand, newConId)
      return true
    }
    // Prevent manual grab by returning true
    if (this.data.usePhysics === 'only') { return true }
    return false
  },
  physicsEnd: function (evt) {
    let constraintId = this.constraints.get(evt.detail.hand)
    if (constraintId) {
      this.el.removeAttribute('constraint__' + constraintId)
      this.constraints.delete(evt.detail.hand)
    }
  },
  physicsClear: function () {
    if (this.el.body) {
      for (let c of this.constraints.values()) {
        this.el.body.world.removeConstraint(c)
      }
    }
    this.constraints.clear()
  },
  physicsIsConstrained: function (el) {
    return this.constraints.has(el)
  },
  physicsIsGrabbing () {
    return this.constraints.size > 0
  }
}
