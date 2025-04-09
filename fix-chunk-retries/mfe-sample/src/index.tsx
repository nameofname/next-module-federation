import { PropsWithChildren } from 'react';

const StyledMFEWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
            {children}
        </div>
    );
}

const Component = (props) => {
    return (
        <StyledMFEWrapper>
            <h2>This is an empty sad MFE 😥</h2>
        </StyledMFEWrapper>
    );
}

Component.isMFE = true;

export default Component;