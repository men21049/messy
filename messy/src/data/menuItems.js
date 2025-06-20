import { Copy, Eye, Settings, Key, Palette, MessageSquare, Code, CheckCircle, BarChart3, CreditCard, TrendingUp, Users, DollarSign, Split } from 'lucide-react';

const menuItems = () =>{
          return [
                { id: 'setup', icon: Key, label: 'API Setup' },
                { id: 'messages', icon: MessageSquare, label: 'Messages' },
                { id: 'integration', icon: Code, label: 'Integration' }
              ]};

export default menuItems;