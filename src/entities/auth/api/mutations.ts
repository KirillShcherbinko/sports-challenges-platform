import { axiosInstance } from '@/shared/api/axios-instance';

import { TGoogleAuthResponse } from '../model/types';

export const googleAuth = async (credential: string): Promise<TGoogleAuthResponse> => {
  const result = await axiosInstance.post<TGoogleAuthResponse>('/google/auth', { credential });
  return result.data;
};
  