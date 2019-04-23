import { WithConnector } from '@syndesis/api';
import { Connector } from '@syndesis/models';
import { ButtonLink, ConnectionCreatorLayout, Loader } from '@syndesis/ui';
import { WithLoader, WithRouteData } from '@syndesis/utils';
import * as React from 'react';
import { ApiError, PageTitle } from '../../../../shared';
import { ConnectionCreatorBreadcrumbs } from '../../components';
import resolvers from '../../resolvers';
import { WithConfigurationForm } from '../../shared';

export interface IConfigurationPageRouteParams {
  connectorId: string;
}

export interface IConfigurationPageRouteState {
  connector?: Connector;
}

export default class ConfigurationPage extends React.Component {
  public render() {
    return (
      <WithRouteData<
        IConfigurationPageRouteParams,
        IConfigurationPageRouteState
      >>
        {({ connectorId }, { connector }, { history }) => (
          <WithConnector id={connectorId} initialValue={connector}>
            {({ data, hasData, error }) => (
              <WithLoader
                error={error}
                loading={!hasData}
                loaderChildren={<Loader />}
                errorChildren={<ApiError />}
              >
                {() => {
                  const onSave = (configuredProperties: {
                    [key: string]: string;
                  }) => {
                    history.push(
                      resolvers.create.review({
                        configuredProperties,
                        connector: data,
                      })
                    );
                  };
                  return (
                    <WithConfigurationForm connector={data} onSave={onSave}>
                      {({
                        form,
                        submitForm,
                        isSubmitting,
                        isValid,
                        isValidating,
                        validateForm,
                      }) => {
                        return (
                          <>
                            <PageTitle title={'Configure connection'} />
                            <ConnectionCreatorLayout
                              header={<ConnectionCreatorBreadcrumbs step={2} />}
                              content={form}
                              backHref={resolvers.create.selectConnector()}
                              cancelHref={resolvers.connections()}
                              onNext={submitForm}
                              isNextDisabled={isSubmitting}
                              extraButtons={
                                <ButtonLink
                                  onClick={validateForm}
                                  disabled={!isValid || isValidating}
                                >
                                  Validate
                                  {isValidating && (
                                    <>
                                      &nbsp;
                                      <Loader size={'sm'} inline={true} />
                                    </>
                                  )}
                                </ButtonLink>
                              }
                            />
                          </>
                        );
                      }}
                    </WithConfigurationForm>
                  );
                }}
              </WithLoader>
            )}
          </WithConnector>
        )}
      </WithRouteData>
    );
  }
}
