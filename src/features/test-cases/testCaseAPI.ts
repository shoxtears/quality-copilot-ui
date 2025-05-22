import axios from 'axios';
import { TestCase } from './testCaseTypes';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const getTestCases = async (): Promise<TestCase[]> => {
  const response = await api.get('/testcases');
  return response.data;
};

export const createTestCase = async (data: Partial<TestCase>): Promise<TestCase> => {
  const response = await api.post('/testcases', data);
  return response.data;
};

export const updateTestCase = async (id: string, data: Partial<TestCase>): Promise<TestCase> => {
  const response = await api.put(`/testcases/${id}`, data);
  return response.data;
};

export const deleteTestCase = async (id: string): Promise<void> => {
  await api.delete(`/testcases/${id}`);
};
