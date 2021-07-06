import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FavoriteArticle = {
  __typename?: 'FavoriteArticle';
  id: Scalars['Int'];
  title: Scalars['String'];
  publisher: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['Float'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  sourceName: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  userId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  addArticle: Scalars['Boolean'];
  removeArticle: Scalars['Boolean'];
  login: LoginResponse;
  revokeUsersRefreshTokens: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationAddArticleArgs = {
  sourceName: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  userId: Scalars['Int'];
  publisher: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationRemoveArticleArgs = {
  url: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRevokeUsersRefreshTokensArgs = {
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  userId: Scalars['String'];
  user: User;
  favoriteArticles: Array<FavoriteArticle>;
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};


export type QueryFavoriteArticlesArgs = {
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AddArticleMutationVariables = Exact<{
  userId: Scalars['Int'];
  title: Scalars['String'];
  publisher: Scalars['String'];
  url: Scalars['String'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  sourceName: Scalars['String'];
}>;


export type AddArticleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addArticle'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'userId'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type RemoveArticleMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type RemoveArticleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeArticle'>
);

export type FavoriteArticlesQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type FavoriteArticlesQuery = (
  { __typename?: 'Query' }
  & { favoriteArticles: Array<(
    { __typename?: 'FavoriteArticle' }
    & Pick<FavoriteArticle, 'url' | 'publisher' | 'title' | 'imageUrl' | 'description' | 'sourceName'>
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type UserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type UserIdQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'userId'>
);


export const AddArticleDocument = gql`
    mutation AddArticle($userId: Int!, $title: String!, $publisher: String!, $url: String!, $imageUrl: String!, $description: String!, $sourceName: String!) {
  addArticle(
    userId: $userId
    title: $title
    publisher: $publisher
    url: $url
    imageUrl: $imageUrl
    description: $description
    sourceName: $sourceName
  )
}
    `;
export type AddArticleMutationFn = Apollo.MutationFunction<AddArticleMutation, AddArticleMutationVariables>;

/**
 * __useAddArticleMutation__
 *
 * To run a mutation, you first call `useAddArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArticleMutation, { data, loading, error }] = useAddArticleMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      publisher: // value for 'publisher'
 *      url: // value for 'url'
 *      imageUrl: // value for 'imageUrl'
 *      description: // value for 'description'
 *      sourceName: // value for 'sourceName'
 *   },
 * });
 */
export function useAddArticleMutation(baseOptions?: Apollo.MutationHookOptions<AddArticleMutation, AddArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArticleMutation, AddArticleMutationVariables>(AddArticleDocument, options);
      }
export type AddArticleMutationHookResult = ReturnType<typeof useAddArticleMutation>;
export type AddArticleMutationResult = Apollo.MutationResult<AddArticleMutation>;
export type AddArticleMutationOptions = Apollo.BaseMutationOptions<AddArticleMutation, AddArticleMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    userId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RemoveArticleDocument = gql`
    mutation RemoveArticle($url: String!) {
  removeArticle(url: $url)
}
    `;
export type RemoveArticleMutationFn = Apollo.MutationFunction<RemoveArticleMutation, RemoveArticleMutationVariables>;

/**
 * __useRemoveArticleMutation__
 *
 * To run a mutation, you first call `useRemoveArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleMutation, { data, loading, error }] = useRemoveArticleMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useRemoveArticleMutation(baseOptions?: Apollo.MutationHookOptions<RemoveArticleMutation, RemoveArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveArticleMutation, RemoveArticleMutationVariables>(RemoveArticleDocument, options);
      }
export type RemoveArticleMutationHookResult = ReturnType<typeof useRemoveArticleMutation>;
export type RemoveArticleMutationResult = Apollo.MutationResult<RemoveArticleMutation>;
export type RemoveArticleMutationOptions = Apollo.BaseMutationOptions<RemoveArticleMutation, RemoveArticleMutationVariables>;
export const FavoriteArticlesDocument = gql`
    query FavoriteArticles($userId: Int!) {
  favoriteArticles(userId: $userId) {
    url
    publisher
    title
    imageUrl
    description
    sourceName
  }
}
    `;

/**
 * __useFavoriteArticlesQuery__
 *
 * To run a query within a React component, call `useFavoriteArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteArticlesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFavoriteArticlesQuery(baseOptions: Apollo.QueryHookOptions<FavoriteArticlesQuery, FavoriteArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteArticlesQuery, FavoriteArticlesQueryVariables>(FavoriteArticlesDocument, options);
      }
export function useFavoriteArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteArticlesQuery, FavoriteArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteArticlesQuery, FavoriteArticlesQueryVariables>(FavoriteArticlesDocument, options);
        }
export type FavoriteArticlesQueryHookResult = ReturnType<typeof useFavoriteArticlesQuery>;
export type FavoriteArticlesLazyQueryHookResult = ReturnType<typeof useFavoriteArticlesLazyQuery>;
export type FavoriteArticlesQueryResult = Apollo.QueryResult<FavoriteArticlesQuery, FavoriteArticlesQueryVariables>;
export const UserDocument = gql`
    query user($userId: Int!) {
  user(userId: $userId) {
    id
    email
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserIdDocument = gql`
    query UserId {
  userId
}
    `;

/**
 * __useUserIdQuery__
 *
 * To run a query within a React component, call `useUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options);
      }
export function useUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserIdQuery, UserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserIdQuery, UserIdQueryVariables>(UserIdDocument, options);
        }
export type UserIdQueryHookResult = ReturnType<typeof useUserIdQuery>;
export type UserIdLazyQueryHookResult = ReturnType<typeof useUserIdLazyQuery>;
export type UserIdQueryResult = Apollo.QueryResult<UserIdQuery, UserIdQueryVariables>;