import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email' value='Your email' />
        </div>
        <TextInput id='email' placeholder='name@company.com' required={true} />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password' value='Your password' />
        </div>
        <TextInput id='password' type='password' required={true} />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <a
          href=''
          className='text-sm text-blue-700 hover:underline dark:text-blue-500'
        >
          Lost Password?
        </a>
      </div>
      <div className='pt-5'>
        <Button type='submit'>Log in to your account</Button>
      </div>
    </form>
  );
}
