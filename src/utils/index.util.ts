// import {
//   ACCESS_TOKEN_EXPIRES_IN,
//   ACCESS_TOKEN_SECRET,
//   REFRESH_TOKEN_EXPIRES_IN,
//   REFRESH_TOKEN_SECRET,
// } from '@config';
import { BadRequestError } from '@errors/api.error';
//import axios from 'axios';
//import { validateOrReject } from 'class-validator';
//import jwt from 'jsonwebtoken';

// export const generateToken = (userId: string) => {
//   const token = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET as string, {
//     expiresIn: ACCESS_TOKEN_EXPIRES_IN,
//   });

//   return token;
// };

// export const generateRefreshToken = (userId: string) => {
//   const refreshToken = jwt.sign(
//     { userId: userId },
//     REFRESH_TOKEN_SECRET as string,
//     {
//       expiresIn: REFRESH_TOKEN_EXPIRES_IN,
//     }
//   );

//   return refreshToken;
// };

export const isNullOrUndefined = (value: any) => {
  return value === null || typeof value === 'undefined';
};

export const objectIsEmpty = (obj: any) => {
  return Object.values(obj).every(
    (x) => x === null || x === '' || x === undefined
  );
};

// export const validateDto = async (input: any, body: any) => {
//   const keys = Object.keys(body);
//   keys.forEach((key) => {
//     if (!isNullOrUndefined(body[key])) {
//       input[key] = body[key];
//     }
//   });

//   await validateOrReject(input);
// };

export const getBearerToken = (authHeader: string | undefined) => {
  if (!authHeader) throw new BadRequestError('Autorização não encontrada');

  const parts = authHeader.split(' ');

  if (parts.length !== 2) throw new BadRequestError('Erro de token');

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    throw new BadRequestError('Token mal formatado');

  return token;
};

export const getFilters = (filters: any) => {
  let urlFilters = '';

  if (objectIsEmpty(filters)) return urlFilters;

  Object.keys(filters).forEach((index, key) => {
    const filter = filters[index];

    if (Array.isArray(filter)) {
      filter.forEach((value, i) => {
        urlFilters += `${index}[]=${value}&`;
      });
    } else {
      urlFilters += `${index}=${filter}&`;
    }
  });

  urlFilters = urlFilters.slice(0, -1);
  return urlFilters ? `?${urlFilters}` : urlFilters;
};

export const getFilterParam = (param: object | string) => {
  return param
    ? typeof param === 'object'
      ? (Object.values(param) as string[])
      : [param]
    : [];
};

export const removeDuplicateObjects = (
  objects: any[] = [],
  key: string
): object[] => {
  const uniqueObjects = [];
  const seenAttributes = new Set();

  for (const obj of objects) {
    const attrValue = obj[key];
    if (!seenAttributes.has(attrValue)) {
      uniqueObjects.push(obj);
      seenAttributes.add(attrValue);
    }
  }

  return uniqueObjects;
};

// export const handleAxiosError = (error: any) => {
//   if (axios.isAxiosError(error)) {
//     if (error.code === 'ECONNREFUSED') {
//       return {
//         status: 500,
//         message: 'Erro interno',
//       };
//     }

//     if (error.response) {
//       return {
//         status: error.response.status || 500,
//         message: error.response.data.message || 'Erro interno',
//       };
//     } else if (error.request) {
//       return {
//         status: 500,
//         message: error.message || 'Erro interno',
//       };
//     } else {
//       return {
//         status: 500,
//         message: error.message || 'Erro interno',
//       };
//     }
//   } else {
//     return {
//       status: 500,
//       message: error.message || 'Erro interno',
//     };
//   }
// };
