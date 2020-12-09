import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from './styles';

export interface TabContentProps {
  title01: string;
  title02: string;
  title03: string;
  content01: React.ReactNode;
  content02: React.ReactNode;
  content03: React.ReactNode;
}

const TabContent = ({
  title01,
  title02,
  title03,
  content01,
  content02,
  content03,
}: TabContentProps) => {
  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>{title01}</Tab>
          <Tab>{title02}</Tab>
          <Tab>{title03}</Tab>
        </TabList>

        <TabPanel>{content01}</TabPanel>
        <TabPanel>{content02}</TabPanel>
        <TabPanel>{content03}</TabPanel>
      </Tabs>
    </Container>
  );
};

export default TabContent;
