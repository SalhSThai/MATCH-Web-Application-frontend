import { Button, Label, Select, TextInput } from 'flowbite-react';

export default function RegisterForm() {
  return (
    <form>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='user' value='Username' />
        </div>
        <TextInput
          id='user'
          type='text'
          placeholder='username'
          required={true}
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email1' value='Your email' />
        </div>
        <TextInput
          id='email1'
          type='email'
          placeholder='name@flowbite.com'
          required={true}
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password1' value='Your password' />
        </div>
        <TextInput
          id='password1'
          type='password'
          required={true}
          placeholder='Your Password'
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password2' value='Confirm password' />
        </div>
        <TextInput
          id='password2'
          type='password'
          required={true}
          placeholder='Confirm password'
        />
      </div>
      <div id='select'>
        <div className='mb-2 block'>
          <Label htmlFor='Gender' value='Gender' />
        </div>
        <Select id='Gender' required={true}>
          <option>Male</option>
          <option>Female</option>
          <option>Undefined</option>
        </Select>
      </div>

      <div className='pt-5'>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
}
