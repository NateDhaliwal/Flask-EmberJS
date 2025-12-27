import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class UsersController extends Controller {
  @service store;

  @tracked formIsShowing;
  @tracked usernameValue;
  @tracked passwordValue;
  @tracked ageValue;
  @tracked firstNameValue;
  @tracked lastNameValue;
  @tracked bioValue;

  @action
  changeFormState() {
    this.formIsShowing = !this.formIsShowing;
  }

  @action
  submitForm() {
    let newUser = this.store.createRecord('user', {
      username: this.usernameValue,
      password: this.passwordValue,
      age: this.ageValue,
      first_name: this.firstNameValue,
      last_name: this.lastNameValue,
      bio: this.bioValue
    });

    newUser.save();

    // Close the form
    this.changeFormState();
  }
}
