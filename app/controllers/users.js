import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class UsersController extends Controller {
  @tracked formIsShowing;

  @action
  changeFormState() {
    this.formIsShowing = !this.formIsShowing;
  }
}
