import { BehaviorSubject } from 'rxjs'

class NavigationStore {
  _screen = new BehaviorSubject('Home')

  get screen() {
    return this._screen.getValue()
  }

  get screenSubject() {
    return this._screen
  }

  set screen(value) {
    this._screen = value
  }
}

export const navigationStore = new NavigationStore()
