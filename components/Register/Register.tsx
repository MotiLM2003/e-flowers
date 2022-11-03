import React, { useState, useEffect } from 'react';
import api from '../../apis/userAPI';

interface User {
  password: string;
  'confirm_password': string;
  'username': string;
  'f_name': string;
  'l_name': string;
  'email': string;
  phone?: string;
  settlement?: string;
  'sex': string;
  accept_terms_of_service?: boolean;
  isFormValid?: boolean;
}

const initialUser: User = {
  password: '',
  'confirm_password': '',
  'username': '',
  'f_name': '',
  'l_name': '',
  'email': '',
  'phone': '',
  'settlement': '',
  'sex': 'זכר',
  'accept_terms_of_service': false,
};

const Register = () => {
  const [user, setUser] = useState<User>(initialUser);
  const [errors, setErrors] = useState({
    ...initialUser,
    accept_terms_of_service: true,
  });
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser({ ...user, [name]: value });
  };

  const onAcceptTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.checked;
    setUser({ ...user, [name]: value });
  };
  const validateForm = () => {
    let isValid: boolean = true;
    if (user.f_name.length < 1) {
      setErrors((prev) => {
        return { ...prev, f_name: 'שם פרטי - חובה' };
      });
      isValid = false;
    }

    if (user.l_name.length < 1) {
      setErrors((prev) => {
        return { ...prev, l_name: 'שם משפחה - חובה' };
      });
      isValid = false;
    }

    if (!isValidEmail(user.email)) {
      setErrors((prev) => {
        return { ...prev, email: 'דוא"ל לא תקני' };
      });
      isValid = false;
    }

    if (user.password.length < 1) {
      setErrors((prev) => {
        return { ...prev, password: 'סיסמה - חובה' };
      });
      isValid = false;
    } else if (user.password !== user.confirm_password) {
      setErrors((prev) => {
        return { ...prev, password: 'סיסמאות לא תואמות' };
      });
      isValid = false;
    }

    if (!user.accept_terms_of_service) {
      setErrors((prev) => {
        return { ...prev, accept_terms_of_service: false };
      });
      isValid = false;
    }
    return isValid;
  };
  const onSubmit = async () => {
    setErrors({
      ...initialUser,
      accept_terms_of_service: true,
    });

    if (!validateForm()) return;
    try {
      const { data } = await api.post('users/createUser', user);
      console.log(data);
    } catch (err: any) {
      console.log(err.response);
    }

    console.log('succes', errors);
  };

  const isError = (p: string) => {
    const isError: boolean = p.length > 1;
    return isError;
  };

  const isValidEmail = (email: string) => {
    const isValid = /\S+@\S+\.\S+/.test(email);

    return isValid;
  };

  useEffect(() => {}, [errors]);
  return (
    <div
      style={{ overflow: 'hidden' }}
      className='flex  flex-col items-center  justify-center '
    >
      <div className=' flex  gap-4'>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>שם פרטי</p>
          <input
            className='input w-full'
            name='f_name'
            value={user.f_name}
            onChange={onChange}
          />
          <p
            className={`${
              isError(errors.f_name) ? '' : 'hidden'
            } bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center`}
          >
            {errors.f_name}
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>
            טלפון&nbsp;
            <span className='text-xs text-gray-400'>(אופציונלי)</span>
          </p>
          <input className='input w-full' />
        </div>
      </div>
      <div className=' flex  gap-4'>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>שם משפחה</p>
          <input
            className='input w-full'
            name='l_name'
            value={user.l_name}
            onChange={onChange}
          />
          <p
            className={`${
              isError(errors.l_name) ? '' : 'hidden'
            }bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center`}
          >
            {errors.l_name}
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>
            ישוב&nbsp;
            <span className='text-xs text-gray-400'>(אופציונלי)</span>
          </p>
          <input
            className='input w-full'
            name='settlement'
            value={user.settlement}
            onChange={onChange}
          />
        </div>
      </div>
      <div className=' flex  gap-4'>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>איימיל</p>
          <input
            className='input w-full'
            name='email'
            value={user.email}
            onChange={onChange}
          />
          <p
            className={`${
              isError(errors.email) ? '' : 'hidden'
            }bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center`}
          >
            {errors.email}
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm text-secondary font-bold mb-2'>
            טלפון&nbsp;
            <span className='text-xs text-gray-400'>(אופציונלי)</span>
          </p>
          <input
            className='input w-full'
            name='phone'
            value={user.phone}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className=' flex  gap-4'>
          <div className='flex flex-col'>
            <p className='text-sm text-secondary font-bold mb-2'>סיסמה</p>
            <input
              type='password'
              className='input w-full'
              name='password'
              value={user.password}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm text-secondary font-bold mb-2'>
              אימות סיסמה&nbsp;
            </p>
            <input
              type='password'
              className='input w-full'
              name='confirm_password'
              value={user.confirm_password}
              onChange={onChange}
            />
          </div>
        </div>
        <p
          className={`${
            isError(errors.password) ? '' : 'hidden'
          }bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center`}
        >
          {errors.password}
        </p>
      </div>
      <div className='mt-4 flex gap-1 '>
        <input
          type='checkbox'
          name='accept_terms_of_service'
          checked={user.accept_terms_of_service}
          onChange={onAcceptTerms}
        />
        <p className='text-xs text-secondary'>
          אני מאשר\ת את תנאי השימוש באנציקלופרח
        </p>
      </div>
      <p
        className={`${
          !errors.accept_terms_of_service ? '' : 'hidden'
        } w-full  bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center`}
      >
        יש לאשר את תנאי השימוש.
      </p>
      <div className='w-full px-20 mt-6'>
        <button className='button-primary w-full' onClick={onSubmit}>
          הירשם
        </button>
      </div>
    </div>
  );
};

export default Register;
