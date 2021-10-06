import {
  createClient
} from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async (req, res) => {
  const {
    data,
    error
  } = await supabase
    .from('Events')
    .select();
  console.log(data, error);
  res.json(data);
}