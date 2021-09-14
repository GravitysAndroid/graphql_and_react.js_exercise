const githubQuery = (
	pageCount,
	queryString,
	paginationKeyword,
	paginationString
) => {
	//Getting all of the data required via GraphQL query
	return {
		query: `
    {
      viewer {
        name
      }
      search(query: "${queryString} user:gravitysandroid sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                spdxId
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,
	};
};

export default githubQuery;
