// import { Component, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-registration-form',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div>
//       <h2>Registration Form</h2>

//       <form (submit)="submitForm(); $event.preventDefault()">

//         <!-- Full Name -->
//         <label>Full Name:</label><br />
//         <input
//           type="text"
//           required
//           [value]="form().fullName"
//           (input)="updateField('fullName', $event.target.value)"
//         /><br /><br />

//         <!-- Email -->
//         <label>Email:</label><br />
//         <input
//           type="email"
//           required
//           [value]="form().email"
//           (input)="updateField('email', $event.target.value)"
//         /><br /><br />

//         <!-- Password -->
//         <label>Password:</label><br />
//         <input
//           type="password"
//           required
//           [value]="form().password"
//           (input)="updateField('password', $event.target.value)"
//         /><br /><br />

//         <!-- Gender -->
//         <label>Gender:</label><br />

//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           [checked]="form().gender === 'male'"
//           (change)="updateField('gender', 'male')"
//         /> Male<br />

//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           [checked]="form().gender === 'female'"
//           (change)="updateField('gender', 'female')"
//         /> Female<br /><br />

//         <!-- Age -->
//         <label>Age:</label><br />
//         <input
//           type="number"
//           min="18"
//           max="100"
//           required
//           [value]="form().age"
//           (input)="updateField('age', $event.target.value)"
//         /><br /><br />

//         <!-- Country -->
//         <label>Country:</label><br />
//         <select
//           required
//           [value]="form().country"
//           (change)="updateField('country', $event.target.value)"
//         >
//           <option value="">Select your country</option>
//           <option value="india">India</option>
//           <option value="usa">America</option>
//           <option value="uk">UK</option>
//           <option value="canada">Canada</option>
//         </select>
//         <br /><br />

//         <!-- Languages -->
//         <label>Languages Known:</label><br />

//         <div *ngFor="let lang of languageOptions">
//           <input
//             type="checkbox"
//             [checked]="form().languages.includes(lang)"
//             (change)="updateLanguage(lang, $event.target.checked)"
//           />
//           <label>{{ lang }}</label>
//         </div>
//         <br />

//         <!-- Phone -->
//         <label>Phone Number:</label><br />
//         <input
//           type="tel"
//           [value]="form().phone"
//           (input)="updateField('phone', $event.target.value)"
//         /><br /><br />

//         <!-- Comments -->
//         <label>Comments or Additional Info:</label><br />
//         <textarea
//           rows="6"
//           [value]="form().comments"
//           (input)="updateField('comments', $event.target.value)"
//         ></textarea>
//         <br /><br />

//         <!-- Resume -->
//         <label>Upload Resume:</label><br />
//         <input type="file" (change)="handleFile($event)" />
//         <br /><br />

//         <!-- Terms -->
//         <input
//           type="checkbox"
//           [checked]="form().termsAccepted"
//           (change)="updateField('termsAccepted', $event.target.checked)"
//           required
//         />
//         <label>I accept the terms and conditions</label>
//         <br /><br />

//         <!-- Buttons -->
//         <button type="reset" (click)="resetForm()">Reset</button>
//         <button type="submit">Submit</button>
//       </form>

//       <!-- Table -->
//       <div style="margin-top: 30px"></div>

//       <table cellpadding="8" border="1">
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Gender</th>
//             <th>Age</th>
//             <th>Country</th>
//             <th>Languages</th>
//             <th>Phone</th>
//             <th>Comments</th>
//             <th>Resume</th>
//             <th>Terms</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr *ngFor="let item of tableData(); let i = index">
//             <td>{{ item.fullName }}</td>
//             <td>{{ item.email }}</td>
//             <td>{{ item.password }}</td>
//             <td>{{ item.gender }}</td>
//             <td>{{ item.age }}</td>
//             <td>{{ item.country }}</td>
//             <td>{{ item.languages.join(', ') }}</td>
//             <td>{{ item.phone }}</td>
//             <td>{{ item.comments }}</td>
//             <td>{{ item.resume }}</td>
//             <td>{{ item.termsAccepted ? 'Yes' : 'No' }}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   `,
// })
// export class RegistrationFormComponent {
//   // Signals
//   form = signal({
//     fullName: '',
//     email: '',
//     password: '',
//     gender: '',
//     age: '',
//     country: '',
//     languages: [] as string[],
//     phone: '',
//     comments: '',
//     resume: '',
//     termsAccepted: false,
//   });

//   tableData = signal<any[]>([]);

//   languageOptions = ['English', 'Hindi', 'French'];

//   updateField(field: string, value: any) {
//     this.form.update((f) => ({ ...f, [field]: value }));
//   }

//   updateLanguage(lang: string, checked: boolean) {
//     this.form.update((f) => ({
//       ...f,
//       languages: checked
//         ? [...f.languages, lang]
//         : f.languages.filter((l) => l !== lang),
//     }));
//   }

//   handleFile(event: any) {
//     const file = event.target.files[0];
//     this.form.update((f) => ({ ...f, resume: file ? file.name : '' }));
//   }

//   submitForm() {
//     this.tableData.update((t) => [...t, this.form()]);
//     this.resetForm();
//   }

//   resetForm() {
//     this.form.set({
//       fullName: '',
//       email: '',
//       password: '',
//       gender: '',
//       age: '',
//       country: '',
//       languages: [],
//       phone: '',
//       comments: '',
//       resume: '',
//       termsAccepted: false,
//     });
//   }
// }
