import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Character = {
  __typename?: 'Character';
  created: Scalars['String']['output'];
  episode: Array<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  location: Location;
  name: Scalars['String']['output'];
  origin: Location;
  species: Scalars['String']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters: Array<Character>;
};


export type QueryCharacterArgs = {
  name: Scalars['String']['input'];
};

export type GetCharacterByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetCharacterByNameQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name: string, status: string, species: string, type: string, gender: string, image: string, episode: Array<string>, url: string, created: string, origin: { __typename?: 'Location', name: string, url: string }, location: { __typename?: 'Location', name: string, url: string } } | null };

export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = { __typename?: 'Query', characters: Array<{ __typename?: 'Character', name: string, type: string, status: string, image: string }> };


export const GetCharacterByNameDocument = gql`
    query getCharacterByName($name: String!) {
  character(name: $name) {
    name
    status
    species
    type
    gender
    origin {
      name
      url
    }
    location {
      name
      url
    }
    image
    episode
    url
    created
  }
}
    `;
export const GetCharactersDocument = gql`
    query getCharacters {
  characters {
    name
    type
    status
    image
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCharacterByName(variables: GetCharacterByNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCharacterByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCharacterByNameQuery>(GetCharacterByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCharacterByName', 'query');
    },
    getCharacters(variables?: GetCharactersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCharactersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCharactersQuery>(GetCharactersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCharacters', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;